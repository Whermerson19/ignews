import style from "./style.module.scss";

interface ISubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  return (
    <button type="button" className={style.subscribeButton}>
      Subscribe now
    </button>
  );
}
