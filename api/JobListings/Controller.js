const { getConnection } = require("../../config/database");
const {create, getAll, getById, createJob, getJob, getJobById, getJobByEmployer} = require("./Service");
const {genSaltSync, hashSync} = require("bcrypt");
module.exports = {
    createUser: (req, res)=>{
        const body = req.body;

        create(body, (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    status: 500,
                    message: err
                });
            }
            return res.status(200).json({
                status: 200,
                data: result
            });
        });
    },
    getEpmloyers: (req, res)=>{
        getAll( (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    status: 404,
                    message: err
                });
            }
            return res.status(200).json({
                status: 200,
                data: result
            });
        });
    },
    getEpmloyersById: (req, res)=>{
         const {id} = req.params;
        getById(id,(err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    status: 404,
                    message: err
                });
            }
            return res.status(200).json({
                status: 200,
                data: result
            });
        });
    },
    createJoblistings: (req, res)=>{
        const body = req.body;
        createJob(body, (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    status: 500,
                    message: err
                });
            }
            return res.status(200).json({
                status: 200,
                data: result
            });
        });
    },

    getjoblistings: (req, res)=>{
        getJob( (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    status: 404,
                    message: err
                });
            }
            return res.status(200).json({
                status: 200,
                data: result
            });
        });
    },
    getJobListingsById: (req, res)=>{
        const {id} = req.params;
        getJobById(id,(err, result)=>{
           if(err){
               console.log(err);
               return res.status(500).json({
                status: 404,
                   message: err
               });
           }
           return res.status(200).json({
            status: 200,
               data: result
           });
       });
   },
   getJobListingsByEmployer: (req, res)=>{
    const {Employer} = req.params;
    getJobByEmployer(Employer,(err, result)=>{
       if(err){
           console.log(err);
           return res.status(500).json({
            status: 404,
               message: err
           });
       }
       return res.status(200).json({
        status: 200,
           data: result
       });
   });
},

}