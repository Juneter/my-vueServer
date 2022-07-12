import formidable from 'formidable'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class Base {
    constructor(){

    }

    upload(req, res){
        const Type = req.params.type
        const fileType = req.query.fileType

        const form = formidable({
            multiples: true,
            uploadDir: `./upload/${ Type }/${ fileType }`
        });

        form.parse(req, (err, fields, files) => {
            // console.log('feilds:', fields)
            // console.log('files', files)
        })

        // let filePath = path.dirname(__dirname);
        console.log(__dirname)

        res.send({
            stats: 0,
            // filePath
        })
    }
}

export default new Base();