import Text from "./components/text";
import Icon from "./components/icon"
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";

import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react"
import XIcon from "./assets/icons/X-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";

export default function App() {

  return (
    <div className="grid gap-10">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base"> Ola mundo!</Text>
        <Text variant="body-sm-bold" className="text-green-base"> Ola mundo!</Text>
        <Text variant="body-sm-bold" > Ola mundo!</Text>
      </div>

       <div className="flex gap-x-1">
        <Icon svg={TrashIcon}  className="fill-green-base"/>
         <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} disabled />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>
       <div>
        <InputText />
      </div>

     

    </div>
  )
}


