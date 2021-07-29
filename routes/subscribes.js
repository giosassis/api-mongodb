const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriberModel");

router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", getSubscriber, (req, res) => {
  res.json(subscriber);
});

router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    userName: req.body.userName,
    userChannel: req.body.userChannel,
  });

  try {
    const newSubscriber = await Subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", getSubscriber, async (req, res) => {
  try {
    const updateSubscriber = await req.Subscriber.save();
    res.json(updateSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "Subscriber deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getSubscriber(req, res, next) {
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(400).json({ message: "Subscriber not found" });
    }
  } catch {
    return res.status(500).json({ message: error.message });
  }
  res.subscriber = subscriber;
  next();
}

module.exports = router;
