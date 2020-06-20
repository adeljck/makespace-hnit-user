let OSS = require('ali-oss')
let client = new OSS(
  {
    region: "oss-accelerate",
    accessKeyId: "LTAI4GJ7VN3E3pZ716TuLTwb",
    accessKeySecret: "xkuHpyUGG7CPpmO5K2tB9moaDcz8K1",
    bucket: "makespace"
  }
)
export const put = async (ObjName, fileUrl) => {
  try {
    let result = await client.put(ObjName, fileUrl)
    return result
  } catch (e) {
    return false
  }
}
export const signatureUrl = async (ObjName) => {
  try {
    let result = await client.signatureUrl(`${ObjName}`)
    return result
  } catch (e) {
    console.log(e)
    return false
  }
}
export const getFileNameUUID = () => {
  function rx() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }

  return `${+new Date()}_${rx()}${rx()}`
}
