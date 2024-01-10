import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import NewsletterForm from '../../components/NewsletterForm'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'

test('renders NewsletterForm with default props', () => {
  render(<NewsletterForm />)

  expect(screen.getByText('Subscribe to the Newsletter')).toBeInTheDocument()
  expect(screen.getByLabelText('email')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
})

test('renders NewsletterForm with custom props', () => {
  render(<NewsletterForm title={['Custom title']} subtitle='Custom subtitle' />)

  expect(screen.getByText('Custom title')).toBeInTheDocument()
  expect(screen.getByText('Custom subtitle')).toBeInTheDocument()
})

//test('subscribes to the newsletter', async () => {
//  const user = userEvent.setup()
//  render(<NewsletterForm />)
//
//  const input = screen.getByLabelText('email')
//  const button = screen.getByRole('button', { name: 'Subscribe' })
//  expect(input).not.toBeDisabled()
//  expect(button).toBeDisabled()
//
//  await user.type(input, 'test@test.com')
//
//  await waitFor(() => {
//    expect(button).not.toBeDisabled()
//  })
//  fireEvent.click(button)
//
//  await waitFor(() => {
//    expect(screen.getByText('Successful! 🎉 You are now subscribed.')).toBeInTheDocument()
//  })
//})
