const userType = 'doi';
const apiKey = 'AB930-9CA333-74474C7-CCED20-4DEC-E13A';

const generateApiHash = () => {
    const d = new Date();
    const currentDate = [d.getFullYear(), (d.getMonth() + 1), d.getDate()].join('-') + 'UTC';
    const timestamp = Date.parse(currentDate);
    return md5('FUKSTERIX_API_HASH_' + timestamp.toString());
}
const apiHash = generateApiHash();

const redirectLink = () => {
    let url = location.href;
    if (url.includes('?')) {
        url = url.substring(0, url.indexOf('?'));
    }
    url = url.split('/');
    url.splice(-1, 1, 'reg1.html');
    return url.join('/');
}

