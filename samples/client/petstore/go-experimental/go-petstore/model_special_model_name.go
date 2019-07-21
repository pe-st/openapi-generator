/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package petstore
import (
	"encoding/json"
)

type SpecialModelName struct {
	SpecialPropertyName *int64 `json:"$special[property.name],omitempty"`

}

// GetSpecialPropertyName returns the SpecialPropertyName field if non-nil, zero value otherwise.
func (o *SpecialModelName) GetSpecialPropertyName() int64 {
	if o == nil || o.SpecialPropertyName == nil {
		var ret int64
		return ret
	}
	return *o.SpecialPropertyName
}

// GetSpecialPropertyNameOk returns a tuple with the SpecialPropertyName field if it's non-nil, zero value otherwise
// and a boolean to check if the value has been set.
func (o *SpecialModelName) GetSpecialPropertyNameOk() (int64, bool) {
	if o == nil || o.SpecialPropertyName == nil {
		var ret int64
		return ret, false
	}
	return *o.SpecialPropertyName, true
}

// HasSpecialPropertyName returns a boolean if a field has been set.
func (o *SpecialModelName) HasSpecialPropertyName() bool {
	if o != nil && o.SpecialPropertyName != nil {
		return true
	}

	return false
}

// SetSpecialPropertyName gets a reference to the given int64 and assigns it to the SpecialPropertyName field.
func (o *SpecialModelName) SetSpecialPropertyName(v int64) {
	o.SpecialPropertyName = &v
}


func (o SpecialModelName) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.SpecialPropertyName != nil {
		toSerialize["$special[property.name]"] = o.SpecialPropertyName
	}
	return json.Marshal(toSerialize)
}


