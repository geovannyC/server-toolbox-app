const shemma_builder = async (txt, name) => {
  const param_status = txt.includes("file,text,number,hex", 0);
  if (param_status) {
    const only_content = txt.replace("file,text,number,hex", "");
    const split_param_txt = only_content.split("\n");
    const result_filer_objs =await  filer_only_objects(split_param_txt,name)
    const schemma_result={
        "file": name,
        "lines": result_filer_objs.filter(e=>e!==false)
     }
     
    return schemma_result
  } else {
    return false;
  }
};
const filer_only_objects=(arr, name)=>{
    return Promise.all(
        arr.map(async(element)=>{
            const result = await filter_valid_lines(element, name)
            return result
        })
    )
}
const filter_valid_lines = (txt, name) => {
  return new Promise((resolve) => {
    const format_txt= txt.trim()
    const txt_splited = format_txt.split(",");
    const txt_each_status = txt_splited.every((e) =>
      e.length < 1 ? false : true
    );
    if (txt_splited.length !== 4) {
        resolve(false);
    } else {
        if (txt_splited[0].toString() === name && txt_each_status) {
            resolve({
                text: txt_splited[1],
                number: txt_splited[2],
                hex: txt_splited[3],
            });
        } else {
        resolve(false);
      }
    }
  });
};
module.exports = {
  shemma_builder,
  filter_valid_lines,
};
