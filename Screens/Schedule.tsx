import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/colors'
import { spacing } from '../utils/spacing'

const Schedule = () => {

  const weekDays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const _borderRadius = spacing.md
  const _spacing = spacing.sm
  const _color = colors.graywhite

  return (
    <View>
      <Text>Schedule</Text>
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({})