import albedo from '@albedo-link/intent'
const {albedo} =require("@albedo-link/intent")
// @ts-ignore
albedo.signMessage({
    message: 'Alice doesn\'t trust Bob'
})
    .then(res => console.log(res.pubkey, res.message, res.original_message, res.message_signature))