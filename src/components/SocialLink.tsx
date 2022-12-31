import {
  IoLogoTwitter,
  IoLogoTwitch,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoTiktok
} from 'react-icons/io5'

import styles from './SocialLink.module.css'

interface SocialLinkProps {
  url: string
  typeLinks:
    | 'Twitter'
    | 'Twitch'
    | 'Github'
    | 'Facebook'
    | 'Instragram'
    | 'Youtube'
    | 'Linkedin'
    | 'Whatsapp'
    | 'Tiktok'
}

export function SocialLink({ url, typeLinks }: SocialLinkProps) {
  return (
    <a
      className={styles.socialLinks}
      href={url}
      target="_blank"
      title={typeLinks}
    >
      {typeLinks == 'Twitter' ? <IoLogoTwitter size={24} /> : ''}
      {typeLinks == 'Twitch' ? <IoLogoTwitch size={24} /> : ''}
      {typeLinks == 'Github' ? <IoLogoGithub size={24} /> : ''}
      {typeLinks == 'Facebook' ? <IoLogoFacebook size={24} /> : ''}
      {typeLinks == 'Instragram' ? <IoLogoInstagram size={24} /> : ''}
      {typeLinks == 'Youtube' ? <IoLogoYoutube size={24} /> : ''}
      {typeLinks == 'Linkedin' ? <IoLogoLinkedin size={24} /> : ''}
      {typeLinks == 'Whatsapp' ? <IoLogoWhatsapp size={24} /> : ''}
      {typeLinks == 'Tiktok' ? <IoLogoTiktok size={24} /> : ''}
    </a>
  )
}
