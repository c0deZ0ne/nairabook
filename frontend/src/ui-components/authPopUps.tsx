import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTypes } from '../types';
import { Button } from './button';
import Alerticon from '../assets/icons/alerticon';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { useNavigate, useNavigation } from 'react-router-dom';

const AuthPopUps = ({
  icon,
  message,
  statusType,
  handleClick,
  btnValue,
  btnClass,
  url,
  isTimed,
}: {
  icon?: string;
  handleClick?: Function;
  message: string;
  statusType: AlertTypes;
  btnValue?: string;
  btnClass?: string;
  url?: string;
  isTimed: number;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isTimed) {
    setTimeout(() => {
      dispatch(closeModal());
      url ? navigate(url) : null;
    }, isTimed || 4000);
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: '-100%' }}
        className="flex justify-center items-center h-screen align-middle w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="w-[400px] h-[200px] bg-white rounded-lg relative flex flex-col items-center gap-[10px] align-middle justify-center"
        >
          <Alerticon type={statusType} />
          <h3 className="flex justify-center items-center text-center text-[14px] max-w-[300px] text-wrap max-h-[100px] truncate text-ellipsis">
            {message}
          </h3>
          {btnValue ? (
            <Button
              handleClick={handleClick}
              value={btnValue}
              className={`h-10 bg-Splenzert-primary-combat_blue text-Splenzert-primary-white w-3/4 text-center text-[13px] ${btnClass}`}
              url={url}
            />
          ) : null}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthPopUps;
