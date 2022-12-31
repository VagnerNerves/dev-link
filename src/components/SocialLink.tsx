import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin
} from 'react-icons/io5'

import styles from './SocialLink.module.css'

interface SocialLinkProps {
  url: string
  typeLinks: 'github' | 'instragram' | 'youtube' | 'linkedin'
}

export function SocialLink({ url, typeLinks }: SocialLinkProps) {
  return (
    <a className={styles.socialLinks} href={url} target="_blank">
      {typeLinks == 'github' ? <IoLogoGithub size={24} /> : ''}
      {typeLinks == 'instragram' ? <IoLogoInstagram size={24} /> : ''}
      {typeLinks == 'youtube' ? <IoLogoYoutube size={24} /> : ''}
      {typeLinks == 'linkedin' ? <IoLogoLinkedin size={24} /> : ''}
    </a>
  )
}
