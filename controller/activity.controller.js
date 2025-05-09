import { Activity } from "../model/activity.js";
import { User } from "../model/User.js";


// this simply create the activity
export const createactivity = async (req, res) => {
  try {
    const { error } = activityValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { Title, Description, Location } = req.body;
    if (!Title || !Description || !Location)
      return res.status(201).json({ message: "there is some missing field" });

    await Activity.create({
      Title,
      Description,
      Location,
    });
    return res.status(200).json({ message: "activty create" });
  } catch (error) {
    console.log("error create activity", error);
  }
};
// this fetch all actiity
export const getallactivity = async (req, res) => {
  try {
    const data = await Activity.find();

    return res.status(201).json(data);
  } catch (error) {
    console.log("error in authencation in usercontroller:", error);
  }
};
// this  is used add activty to any user
export const addactivity = async (req, res) => {
  try {
    const { Userid, Activityid } = req.body;

    const user = await User.findById(Userid);
    if (!user) return res.status(404).json({ message: "User not found" });

    const activity = await Activity.findById(Activityid);
    if (!activity)
      return res.status(404).json({ message: "Activity not found" });

    user.Activity.push(activity._id);
    await user.save();

    return res.status(200).json({ message: `Activity added for ${user.Name}` });
  } catch (error) {
    console.log("Error in adding the activity:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
