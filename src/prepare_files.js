import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import sendEmail from "./send_email.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));

// Read config file
const readConfig = () =>
  fs.readFile(__dirname + "/config/config.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    readText(JSON.parse(data));
  });

// Reads the email text
const readText = (config) =>
  fs.readFile(__dirname + "/config/text.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    config.options.text = data;

    readAttachments(config);
  });

// Includes the attachments.
const readAttachments = (config) => {
  for (let att of config.options.attachments) {
    att.content = fs.createReadStream(__dirname + "/attachments/Meu currículo.pdf");

    sendEmail(config);
  }
};

const prepareFile = () => {
  readConfig();
};

export default prepareFile;
