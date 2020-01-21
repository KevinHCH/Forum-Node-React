const jsonResponse = (param,message = {}, data = []) => {
  let jsonResponse = {}
  if(param){
    jsonResponse['success'] = true
    jsonResponse['message'] = message.success
    if(data.length > 0) jsonResponse['data'] = data
  }else{
    jsonResponse['success'] = false
    jsonResponse['message'] = message.error
  }

  return jsonResponse;
}
module.exports ={
  jsonResponse
}