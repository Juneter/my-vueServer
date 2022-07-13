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
            console.log('files', files.file.name)
            if (err)  {
                res.send({
                    status: -1,
                    msg: '上传失败'
                })
                return
            }
            res.send({
                status: 1
            })
        })
    }
}

export default new Base();