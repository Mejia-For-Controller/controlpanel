import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function EmailSubscribe() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
      <p>hi</p>
  )
}