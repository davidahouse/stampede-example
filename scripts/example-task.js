const path = require("path");
const fs = require("fs");

async function execute(taskConfig, workingDirectory, logger) {
  logger.info(JSON.stringify(taskConfig, null, 4));

  let summary = "Basic task execution complete";
  let text =
    "- buildKey: " +
    taskConfig.task.buildKey +
    "\n" +
    "- buildID: " +
    taskConfig.task.buildID +
    "\n" +
    "- taskID: " +
    taskConfig.task.taskID +
    "\n";

  return {
    conclusion: "success",
    summary: summary,
    text: text,
  };
}

module.exports.execute = execute;
