import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue
        placeholder="Select a fruit"
        value={formData.fruit ? { value: formData.fruit, label: formData.fruit } : null}
        onChange={handleSelectChange}
      />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruit</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}
