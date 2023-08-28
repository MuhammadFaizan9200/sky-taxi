//////////////////////////////////////////////////////////////////
// Get all bill return in v4 API's
//////////////////////////////////////////////////////////////////
async function get_company_info() {
    try {
        $(".hidden_div_spinner").show();
        $(".spinner-border").show();
        const endpoint = "get_company_info";
        const request_type = "GET";
        const payload = {};

        const response = await request(request_type, payload, endpoint);
        const data = response["data"];
        console.log(data)
        if (data.length > 0) {
            var first_name =data[0].first_name
            var last_name =data[0].last_name
            var  full_name = first_name +" " + last_name
            setCookie("full_name", full_name, 30);
        } else {

        }
    } catch (err) {
        console.log(err);
    }
}

get_company_info().then((r) => "");
