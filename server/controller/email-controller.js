import Email from "../model/email.js";

export const saveSentEmails = async (request, response) => {
  try {
    const email = new Email(request.body);
    await email.save();
    response.status(200).json("Email saved successfully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getEmails = async (request, response) => {
  try {
    let emails = [];
    if (request.params.type === "bin") {
      emails = await Email.find({ bin: true });
    } else if (request.params.type === "allmail") {
      emails = await Email.find({});
    } else {
      emails = await Email.find({ type: request.params.type });
    }
    return response.status(200).json(emails);
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const moveEmailsToBin = async (request, response) => {
  try {
    await Email.updateMany(
      { _id: { $in: request.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return response.status(200).json("Emails moved to bin successfully");
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};
