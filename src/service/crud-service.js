class CrudService{
    constructor(repository){
        this.repository=repository;

    }
    async create(data){
        try{
            const result=await this.repository.create(data);
            return result;

        }
        catch(err){
            throw {err};

        }

    }

    async get(repoId){
        try{
            const data=await this.repository.getById(repoId);
            return data;

        }
        catch(err){
            throw {err};
        }
    }
    async getAll(){
        try{
            const result=await this.repository.getAll();
            return result;

        }
        catch(err){
            throw {err};
        }
    }
    
}
module.exports=CrudService;