import Contact from "../models/Contact.js";

// CREATE MESSAGE (PUBLIC)
export const createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      message: "Your message has been received!",
      contact: newContact,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET ALL MESSAGES (ADMIN)
export const getMessages = async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
};

// GET SINGLE MESSAGE
export const getMessage = async (req, res) => {
  const message = await Contact.findById(req.params.id);
  res.json(message);
};

// DELETE MESSAGE
export const deleteMessage = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Message deleted" });
};
