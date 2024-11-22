import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { generatePredictions } from '../../../Service/statistics/GraphicsBarra';

export default function SelectSensors({ setHistoricalData, setPredictions, setTipeSensor }) {

    const [valueSelect, setValueSelect] = React.useState('hydrogen');

 
    React.useEffect(() => {
        const fetchData = async () => {
            try {    
                
                
                const result = await generatePredictions({ typeSensor: valueSelect });
                const { historicalData, predictions, sensortype } = result.data;
                
                setHistoricalData(historicalData)
                setPredictions(predictions)
                setTipeSensor(sensortype)
            } catch (error) {
                console.error("Error:", error.message);
            }
        };

        fetchData(); 
    }, [valueSelect]); 


    const handlerClick = async (event, value) => {
        try {
            const result = await generatePredictions({ typeSensor: value });
            console.log(result);
            setDataPredictions(result); 
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const handleChange = (event, value) => {
        setValueSelect(value); 
        handlerClick(event, value);
    };

    return (
        <Select
            value={valueSelect} 
            onChange={handleChange} 
            placeholder="Selecciona un sensor"
            indicator={<KeyboardArrowDown />}
            sx={{
                width: 150,
                [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                    },
                },
            }}
        >
            <Option value="ph">Ph</Option>
            <Option value="hydrogen">Hidrógeno</Option>
            <Option value="oxigen">Oxígeno</Option>
            <Option value="temperature">Temperatura</Option>
        </Select>
    );
}
