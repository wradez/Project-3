import axios from "axios";

export default {

    getAllUserPlans: function(id){
        return axios.get("/api/planit/plan/" + id)
    },

    getPlanByID: function(id){
        return axios.get("/api/planit/" + id)
    },

    postPlan: function(){
        return axios.post("/api/planit/")
    },

    deletePlan: function(id){
        return axios.put("/api/planit" + id)
    },

}
