import axios from "axios";

export default {
    

getAllUserPlans: function(id){
    return axios.get("/api/planit/plan/"+ id + "/all" )
},


getPlanByID: function(id){
    return axios.get("/api/planit/plan/" + id)
},

postPlan: function(GearData){
    return axios.post("/api/planit/plan/", GearData)
},

getExpendableGoods: function(id){
    return axios.get("/api/planit/ExpendableGoods/" + id)
},

postExpendableGoods: function(ExData){
    return axios.post("/api/planit/ExpendableGoods/", ExData)
},

getGear: function(id){
    return axios.get("/api/planit/Gear/" + id)
},

postGear: function(GearData){
    return axios.post("/api/planit/Gear/", GearData)
},

getLogistics: function(id){
    return axios.get("/api/planit/Logistics/" + id)
},

postLogistics: function(LogData){
    return axios.post("/api/planit/Logistics/", LogData)
},

getMessage: function(id){
    return axios.get("/api/planit/MessageBoard/" + id)
},

postMessage: function(MessageData){
    return axios.post("/api/planit/MessageBoard/", MessageData)
},

getOther:function(id){
    return axios.get("/api/planit/Other/" + id)
},

postOther: function(OtherData){
    return axios.post("/api/planit/Other/", OtherData)
},

getRec: function(id){
    return axios.get("/api/planit/Recreational/" + id)
},

postRec: function(RecData){
    return axios.post("/api/planit/Recreational/", RecData)
},

getUser: function(id){
    return axios.get("/api/planit/User/" + id)
},

postUser: function(UserData){
    return axios.post("/api/planit/User/", UserData)
}







// deletePlan: function(id){
//     return axios.put("/api/planit" + id)
    
// },


    
}