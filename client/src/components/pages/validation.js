import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import store from '../../data/store'
import { connect } from 'react-redux'

const Validation = user => {
  const [validation, setValidation] = useState('')
  const [cahier_id, setCahier_id] = useState('')
  const [user_id, setUser_id] = useState('')
  const { id } = useParams()
  const { _id } = user
  useEffect(() => {
    handleAddValidation()
  }, [])

  const addValidation = async () => {
    const result = await axios.post(
      'http://localhost:4000/api/validation/',
      validation
    )
    return result.data
  }

  const handleAddValidation = () => {
    addValidation(cahier_id, user_id)
    setCahier_id('test')
    setUser_id('test')
  }

  return <div>validation avec sucess</div>
}

const mapToStateProps = state => ({
  user: state.auth.user
})
export default connect(mapToStateProps)(Validation)
