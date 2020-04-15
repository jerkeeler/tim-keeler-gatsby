import React from 'react';
import PropTypes from 'prop-types';

import ChatIcon from '../icons/ChatIcon';
import GitHubIcon from '../icons/GitHub';
import InfoIcon from '../icons/InfoIcon';
import VolumeIcon from '../icons/VolumeIcon';

const iconName = {
  info: InfoIcon,
  chat: ChatIcon,
  volume: VolumeIcon,
  github: GitHubIcon,
};

const Icon = ({ className = 'w-8 h-8', icon }) => {
  const Component = iconName[icon];
  return <Component className={className} />;
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(iconName)),
};

export default Icon;
