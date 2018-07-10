import axios from "axios";

export default {

// getAllUserPlans: function(id){
//     return axios.get("/api/planit/user/" + id)
// },

getPlanByID: function(id){
    return axios.get("/api/planit/" + id)
},

postPlan: function(GearData){
    return axios.post("/api/planit/",GearData)
},

deletePlan: function(id){
    return axios.put("/api/planit" + id)
    
},
    
}