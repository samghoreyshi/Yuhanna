'use client';
import { useState, useEffect, useRef, use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  HiOutlineChat, HiOutlineDotsVertical, HiOutlineThumbUp, HiOutlinePaperAirplane, HiOutlineTrash,
  HiOutlineLightBulb, HiOutlineClock, HiOutlineUser, HiOutlineEye, HiOutlineBookmark,
  HiOutlineShare, HiOutlineTag, HiOutlineCheck, HiOutlineChatAlt, HiOutlineThumbDown,
  HiOutlinePencil, HiOutlineLockClosed, HiOutlineChartBar, HiOutlineArrowRight
} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';
