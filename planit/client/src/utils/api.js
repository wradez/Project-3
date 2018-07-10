import axios from "axios";

export default {

// getAllUserPlans: function(id){
//     return axios.get("/api/planit/user/" + id)
// },

getPlanByID: function(id){
    return axios.get("/api/Gear/" + id)
},

postPlan: function(GearData){
    return axios.post("/api/Gear/",GearData)
},

deletPlan: function(id){
    return axios.put("/api/Gear" + id)
    
},
    
}