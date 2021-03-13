import style from './button.module.css';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default function Button(props) {
  return <button className={style.primary}>{props.children}</button>;
}
