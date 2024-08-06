import {Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: object;
};

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={tw`text-center text-lg font-bold`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
