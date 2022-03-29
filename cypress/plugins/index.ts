/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

import fs from 'fs-extra';
import path from 'path';

function getConfigurationByFile(fileName: File) {
  const pathToConfigFile = path.resolve(
    __dirname,
    `../config/${fileName}.json`
  );
  let rawData;
  try {
    rawData = fs.readJson(pathToConfigFile);
  } catch (e) {
    console.error(e);
    return;
  }
  return rawData;
}

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<unknown> | undefined => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // this value comes from *cypress run --env configFile=staging*
  const configFile = getConfigurationByFile(config.env.configFile || 'local');

  return configFile;
};
