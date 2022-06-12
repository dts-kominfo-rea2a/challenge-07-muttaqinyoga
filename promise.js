const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reactions) => {
  try{
    const resultsReaction = (await promiseTheaterIXX()).concat((await promiseTheaterVGC()));
    return resultsReaction.filter(res => (res.hasil === reactions)).length;
  } catch(err){
    console.log(err);
  }
}

module.exports = {
  promiseOutput,
};
