const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Job_Recruitment_System").catch(error => handleError(error));