import jsonpP from 'jsonp-p';

const getResultsWiki = function(input) {
    return jsonpP(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=13&srwhat=text&srinfo=suggestion&srsearch=${input}&callback=JSON_CALLBACK`)
        .then(function handleSuccess(response) {
            return { results: response };
        })
        .catch(function handleError(error) {
            console.log(error);
        });

};

export default getResultsWiki;

