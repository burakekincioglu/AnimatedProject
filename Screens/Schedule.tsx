import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { spacing } from '../utils/spacing';

const Schedule = () => {

  const weekDays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const _borderRadius = spacing.md
  const _spacing = spacing.sm
  const _color = colors.graywhite
  const _startHour = 8

  function DayBlock() {
    const [hours, setHours] = useState([_startHour])

    return (
        <View>
            <Text>Day Block</Text>
            <Pressable
            onPress={() => {
                if (hours.length === 0) {
                    setHours([_startHour])
                    return
                }
                setHours((prev) => [...prev, prev[prev.length -1] + 1])
            }}
            >
                <View style={{
                    flexDirection: "row",
                    gap: _spacing / 2,
                    padding: _spacing,
                    borderRadius: _borderRadius - _spacing / 2,
                    backgroundColor: _color,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: _spacing / 2
                }}>
                {/* <Ionicons color='#333' name="add" size={24} /> */}
                <Text style={{fontWeight: "bold", fontSize: 16}} >+</Text>
                <Text style={{fontSize: 14, color: "#333"}} >Add more</Text>
                </View>
            </Pressable>
        </View>
    )
    
  }



  function Day({day}: {day: typeof weekDays[number]}) {
    const [isOn, setIsOn] = useState(false)
    return(
        <View style={{borderWidth: 1,
                      borderColor: _color,
                      borderRadius: _borderRadius,
                      padding: _spacing,
                      backgroundColor: isOn ? "transparent" : _color
        }} >
            <View style={{flexDirection: "row", 
                          alignItems: "center", 
                          justifyContent: "space-between",
            }} >
                <Text>{day}</Text>
                <Switch 
                    value={isOn} 
                    onValueChange={(value) => setIsOn(value)} 
                    trackColor={{true: colors.darkgray}}
                    style={{
                        transform: [
                            {
                                scale: 0.7
                            },
                            {
                                translateX: 10
                            }
                        ]
                    }}
                />
            </View>
            {isOn && <DayBlock />}
        </View>
        
    )
  }

  return (
    <View style={{padding: _spacing, gap: _spacing, backgroundColor: colors.white, flex: 1}}>
      {weekDays.map(day => (
        <Day
            day={day}
            key={`day-${day}`}
        />
      ))}
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({})