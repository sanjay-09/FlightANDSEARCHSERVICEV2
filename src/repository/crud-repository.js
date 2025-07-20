class CrudRepository{
    constructor(model){
        this.model=model
    }
    async create(data){
        try{
            const result=await this.model.create(data);
            return result;

        }
        catch(err){
            throw {err};

        }
    }
    async getById(modelId){
        try{
            const result=await this.model.findByPk(modelId);
            return result;

        }
        catch(err){
            throw {err};
        }
    }
    async deleteById(modelId){
        try{
            const result=await this.model.destroy({
                where:{
                    id:modelId
                }
            })

        }
        catch(err){
            throw {err};
        }
    }
    async getAll(){
        try{
            const result=await this.model.findAll();
            return result;

        }
        catch(err){
            throw {err};
        }
    }
    

}
module.exports=CrudRepository;