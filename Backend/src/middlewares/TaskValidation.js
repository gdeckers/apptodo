const TaskModel = require('../models/TaskModel');
const TaskController = require('../controllers/TaskController');
const { isPast } = require('date-fns');


const TaskValidation = async(req, res, next) => {
    const { macaddress, type, title, description, when } = req.body;
    if(!macaddress){
        return res.status(400).json({ error: 'MAC Address é obrigatório'});
    }else if(!type) {
        return res.status(400).json({ error: 'Tipo é obrigatório'});
    }else if(!title) {
        return res.status(400).json({ error: 'Titulo é obrigatório'});
    }else if(!description) {
        return res.status(400).json({ error: 'Descricao é obrigatório'});
    }else if(!when) {
        return res.status(400).json({ error: 'Date e hora é obrigatório'});
    }else {

        let exists;

        if(req.params.id){
            exists = await TaskModel.findOne({'_id':{'$ne':req.params.id},'when': {'$eq':new Date(when)}, 'macaddress': {'$in':macaddress}});
        }else {
			if(isPast(new Date(when)))
				return res.status(400).json({ error: 'Informar uma data futura!'});

            exists = await TaskModel.findOne({'when': {'$eq':new Date(when)}, 'macaddress': {'$in':macaddress}});
        }
        
        if(exists)
            return res.status(400).json({ error: 'Já existe atividade agendada!'});

        next();
    }
}

module.exports = TaskValidation;