const successCodes=Object.freeze({
    OK:200,
    Created:201

});

const clientErrorCodes=Object.freeze({
    BAD_REQ:400,
    UNAUTHORIZED:401,
    NOT_FOUND:300
})

const serverErrorCodes=Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501

})

module.exports={
    successCodes,
    clientErrorCodes,
    serverErrorCodes
}