const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: { type: String, enum: ['categorize', 'cloze', 'comprehension'], required: true },
  text: String,
  image: String,
});

const FormSchema = new mongoose.Schema({
  formTitle: String,
  headerImage: String,
  questions: [QuestionSchema],
  responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }]
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;
