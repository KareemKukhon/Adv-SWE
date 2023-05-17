const { getConnection } = require("../../config/database");
const {create, getAll, getById, createJob, getJob} = require("./userService");
const {genSaltSync, hashSync} = require("bcrypt");
module.exports = {
    createUser: (req, res)=>{
        const body = req.body;
        //const salt = genSaltSync(10);
        //body.password = hashSync(body.password, salt);
        create(body, (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },
    getEpmloyers: (req, res)=>{
        // const body = req.body;
        getAll( (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
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
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
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
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },

    getjoblistings: (req, res)=>{
        // const body = req.body;
        getJob( (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },

}