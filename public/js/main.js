// Header
var oHeader = {alg: 'HS256', typ: 'JWT'};
// Payload
var oPayload = {};
var tNow = KJUR.jws.IntDate.get('now');
var tEnd = KJUR.jws.IntDate.get('now + 1day');
oPayload.iss = "http://jwtmaster.com";
oPayload.sub = "mailto:vincent.carluer@3ds.com";
oPayload.nbf = tNow;
oPayload.iat = tNow;
oPayload.exp = tEnd;
oPayload.jti = "id123456";
oPayload.aud = "http://jwtmaster.com/id";
// Sign JWT, password=x3po
var sHeader = JSON.stringify(oHeader);
var sPayload = JSON.stringify(oPayload);
var sJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, "x3po");
document.getElementById("jwtMaster").innerHTML = sJWT;
