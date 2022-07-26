import formidable from 'formidable'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { type } from 'os'

import config from '../config/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class Base {
    constructor() {
        idList: ['product_id', 'img_id',]
    }

    upload(req, res) {
        let type = req.params.type

        const form = formidable({
            multiples: true,
            keepExtensions: true,
            uploadDir: `./upload/${type}/${req.query.filetype}`
        });

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.send({
                    status: -1,
                    msg: '上传失败'
                })
                return
            }

            let parsePath = path.join(__dirname, `../upload`)
            let filePath = files.file.filepath.replace(parsePath, `${config.server.HOST}:${config.server.PORT}`)

            console.log(parsePath, filePath)

            res.send({
                status: 1,
                filePath
            })
        })
    }

    getId(type) {

    }
}

export default new Base();