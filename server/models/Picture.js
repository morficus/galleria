var Promise     = require('bluebird'),
    mongoose    = Promise.promisifyAll(require('mongoose')),
    Schema      = mongoose.Schema,

    Picture;

Picture = new Schema({
    title:          {type: String, required: true},
    isPublic:       {type: Boolean, required: true, default: true},
    filePAth:       {type: String, required: true},
    owner:          {type: Schema.Types.ObjectId, required: true},
    importDate:     {type: Date, required: true, default: Date.now()},
    exif: {
        ApertureValue:      {type: String},
        // picture reaction date
        DateTimeDigitized:  {type: Date, required: true},
        // modified date
        DateTime:           {type: Date, required: true},
        // date/time when original image was taken
        DateTimeOriginal:           {type: Date, required: true},
        // (1 or 2 values: 1. The time zone offset of DateTimeOriginal from GMT in hours, 2. If present, the time zone offset of ModifyDate)
        TimeZoneOffset:     {type: String}
    },
    gsp: {type: [Number], index: '2dsphere'}
});

module.exports = mongoose.model('Pictures', Picture);
