const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// 订阅newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    // 检查邮箱是否已经订阅
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'This email is already subscribed' });
    }

    const newSubscriber = new Newsletter({
      email
    });

    await newSubscriber.save();
    res.status(201).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ message: 'Error subscribing to newsletter' });
  }
});

// 获取所有订阅者（可选，用于管理后台）
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    res.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ message: 'Error fetching subscribers' });
  }
});

module.exports = router; 