import axios from "axios";

export default {

getAllUserPlans: function(id){
    return axios.get("/api/planit/user/" + id)
},

getPlanByID: function(id){
    return axios.get("/api/planit/plan/" + id)
},

postPlan: function(){
    return axios.post("/api/planit/plan/")
},

updatePlan: function(id){
    return axios.put("/api/planit/plan/" + id)
    
},

getAllExpendableGoods: function(id){
    return axios.get("/api/planit/")
}


    
}