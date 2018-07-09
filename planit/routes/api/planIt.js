const router = require("express").Router();
const Admin = require("../../controllers/planitControllersAdmin");
const ExpendableGoods = require("../../controllers/planitControllersExpendableGoods");
const Gear = require("../../controllers/planitControllersGear");
const Logistics = require("../../controllers/planitControllersLogisitics");
const MessageBoard = require("../../controllers/planitControllersMessageBoard");
const Other = require("../../controllers/planitControllersOther");
// const planitControllersPlanIt = require("../../controllers/PlanitControllersPlanIt");
const Recreational = require("../../controllers/planitControllersRecreational");
const User = require("../../controllers/planitControllersUser");
// const planitControllersUserSession = require("../../controllers/planitContrllersUserSession");

function (req,res){
    let items = [{
         name:ExpendableGoods,
         model: ExpendableGoods
         },
        {
        name:ExpendableGoods,
        model: ExpendableGoods   
        },  
        , Gear, Logistics, MessageBoard, Other, Recreational }];

    Promise.all()

}





router.route("/user/:userid")
    .get(User.findAllByUserId)
    .put(User.update)
    .post(User.create)
    .delete(User.remove);

 router.route("/user/:userid/all")
    .get(planitControllersUser.findAllByUserId)
    .put(planitControllersUser.update)
    .post(planitControllersAdmin.create)
    .delete(planitControllersUser.remove);

router.route("/plan/:planid")
    .get(User.findByPlanId)
    .put(User.update)   
    .delete(User.remove);

 router.route("/plan/:planid/all")
    .get(User.findByPlanId)
    .put(User.update)   
    .delete(User.remove);

router.route("/plan/")
    .post(User.create)

router.route("/Admin")
    .get(Admin.findAll)
    .put(Admin.update)
    .post(Admin.create)
    .delete(Admin.remove);

router.route("/ExpendableGoods")
    .get(ExpendableGoods.findById)
    .post(ExpendableGoods.create)
    .put(ExpendableGoods.update);

router.route("/Gear")
    .get(Gear.findAll)
    .post(Gear.create)
    .put(Gear.update);


router.route("/Logistics")
    .get(Logistics.findAll)
    .post(Logistics.create)
    .put(Logistics.update);

router.route("/MessageBoard")
    .get(MessageBoard.findAll)
    .post(MessageBoard.create)
    .put(MessageBoard.update);

router.route("/Other")
    .get(Other.findAll)
    .post(Other.create)
    .put(Other.update);

router.route("/Recreational")
    .get(Recreational.findAll)
    .post(Recreational.create)
    .put(Recreational.update);

// router.route("/User")
//     .get(planitControllersUser.findAll)
//     .post(planitControllersUser.create)
//     .put(planitControllersUser.update);

module.exports = router;